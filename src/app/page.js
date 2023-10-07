"use client";
import React from "react";
import SignIn from "@/components/auth/signin";
import SignUp from "@/components/auth/signup";

import { handleSignIn, handleSignUp } from "@/lib/supaAuth";
export default function Home() {
	const Auth = () => {
		const [authState, setAuthState] = React.useState("signin");
		if (authState === "signin") {
			return <SignIn setAuthState={setAuthState} handleSignIn={handleSignIn} />;
		} else {
			return <SignUp setAuthState={setAuthState} handleSignUp={handleSignUp} />;
		}
	};
	return (
		<main className='min-h-screen py-4'>
			<Auth />
		</main>
	);
}
