import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export const Auth = () =>{
    return <div>
        <SignedOut>
            <SignInButton>Sign In</SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton></UserButton>
        </SignedIn>
    </div>
}
