"use client"

import { BetterAuthActionButton } from "@/components/auth/better-auth-action-button"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { SUPPORTED_OAUTH_PROVIDER_DETAILS, SUPPORTED_OAUTH_PROVIDERS } from "@/lib/o-auth-providers"


export function SocialAuthButtons() {
    return SUPPORTED_OAUTH_PROVIDERS.map((provider) => {
        const Icon = SUPPORTED_OAUTH_PROVIDER_DETAILS[provider].Icon

        // add some loading and error states 

        return <BetterAuthActionButton variant="outline" key={provider} action={() => {
           return authClient.signIn.social({ provider, callbackURL: "/"})
           
        }}>
            <Icon />
            {SUPPORTED_OAUTH_PROVIDER_DETAILS[provider].name}
        </BetterAuthActionButton>
    })
}