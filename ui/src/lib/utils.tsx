import { supabaseAdmin } from './supabase'

// error, unassigned, running, finished
// jobs, hyperparams

const createProject = async (jobInfo) => {
  const {data, error} = await supabaseAdmin
  .from('jobs')
  .insert({
    type: jobInfo.type,
    status: jobInfo.status,
  })
  .select();
  if (error) console.log(error)
  
  return data[0].id;
};

const updateProject = async (id, jobInfo) => {
  const {data, error} = await supabaseAdmin
  .from('jobs')
  .update({
    type: jobInfo.type,
    status: jobInfo.status,
  })
  .eq('id', id);
};

const createHyperparams = async (hyperparamsInfo) => {
  const { data, error } = await supabaseAdmin
  .from('hyperparams')
  .insert(hyperparamsInfo);
  if (error) console.log(error)
};

const viewProject = async () => {
  const { data, error } = await supabaseAdmin
  .from('jobs')
  .select("id, type, status, hyperparams (name, value)")
  .eq("type", "train")
  .order('id');
  if (error) console.log(error)
  return data
};

const viewProjectById = async (id) => {
  const { data, error } = await supabaseAdmin
  .from('jobs')
  .select("id, type, status, result_path, hyperparams (name, value)")
  .eq("id", id);
  if (error) console.log(error)
  return data[0];
};

const uploadImage = async (file: File, filename: string) => {
  try {
    const { data, error } = await supabaseAdmin.storage
    .from("images")
    .upload(filename, file)
    if (error) console.log(error)
  } catch (e: any) {
    // Handle errors here
    console.error(e)
  }
};

const getResults = async () => {
  const { data, error } = await supabaseAdmin
  .storage
  .from('results')
  .list('', {
    limit: 100,
    offset: 0,
  })
  if (!data) {
    console.log('no images');
    return []
  }
  var urls = []
  for (const f of data) {
    urls.push(supabaseAdmin.storage.from('results').getPublicUrl(f.name).data.publicUrl)
  }
  return urls
}

const getInferenceResults = async (jobId) => {
  // Get the name of the model checkpoint
  var { data, error } = await supabaseAdmin
    .from('jobs')
    .select("result_path")
    .eq('id', jobId);

  const resultPath = data[0]["result_path"];
  

  // Get the ids (unique) of the inference jobs
  var { data, error } = await supabaseAdmin
    .from('hyperparams')
    .select("job_id")
    .eq('name', 'tune_path')
    .eq('value', resultPath);

  const inferenceIds = data?.map((item) => item.job_id);
  console.log("Results", inferenceIds)

  // Get the image paths of the inference jobs
  var { data, error } = await supabaseAdmin
    .from('jobs')
    .select("result_path")
    .in('id', inferenceIds)
    .order('id', {ascending: false});

  const inferenceImages = data?.map((item) => item.result_path);

  return inferenceImages;

};

export { createProject, updateProject, viewProject, viewProjectById, uploadImage, createHyperparams, getResults, getInferenceResults };