import supabase from "./supabaseClient";

const getCurrentUserId = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return user.id;
  } else {
    // Handle the case where the user is not logged in or the session has expired
    console.error("User is not authenticated");
    return null; // or handle it in a way that fits your application logic
  }
};

export { getCurrentUserId };
