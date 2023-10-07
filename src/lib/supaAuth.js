import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const supabase = createClientComponentClient();
export const handleSignUp = async (router, { email, username, password }) => {
	await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${location.origin}/auth/callback`,
		},
	});
	router.refresh();
};

export const handleSignIn = async (router, { email, username, password }) => {
	await supabase.auth.signInWithPassword({
		email,
		password,
	});
	router.refresh();
};

export const handleSignOut = async (router) => {
	await supabase.auth.signOut();
	router.refresh();
};
