import { supabaseAdmin } from './supabase'

const createProject = async () => {
  const { data, error } = await supabaseAdmin
  .from('jobs')
  .insert({
    type: "mytype",
    status: "pending",
    model_name: "my_model",
  });
  if (error) console.log(error)
};

const viewProject = async () => {
  const { data, error } = await supabaseAdmin
  .from('jobs')
  .select("model_name");
  if (error) console.log(error)
  if (data) console.log(data)
  return data
};

const uploadImage = async (file: File) => {
    try {
        const { data, error } = await supabaseAdmin.storage
        .from('test_bucket')
        .upload('public/img1.png', file)
        if (error) console.log(error)
        if (data) console.log(data)
      } catch (e: any) {
        // Handle errors here
        console.error(e)
      }
};

export { createProject, viewProject, uploadImage };