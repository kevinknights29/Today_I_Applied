import supabase from './supabaseClient';

const getCurrentUserId = async () => {
  const {
    data: {user},
  } = await supabase.auth.getUser();

  if (user) {
    return user.id;
  } else {
    console.error('User is not authenticated');
    return null;
  }
};

export {getCurrentUserId};
