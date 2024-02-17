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
  console.log("Hyperparams info:", hyperparamsInfo)
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
  if (data) console.log(data)
  return data
};

const uploadImage = async (file: File, filename: string) => {
  try {
    console.log(filename)
    const { data, error } = await supabaseAdmin.storage
    .from("images")
    .upload(filename, file)
    if (error) console.log(error)
    if (data) console.log(data)
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

export { createProject, updateProject, viewProject, uploadImage, createHyperparams, getResults };