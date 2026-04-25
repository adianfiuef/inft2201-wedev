<?php
namespace Application;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Verifier
{
    public $userId;
    public $role;

    Mail mail = new Mail();

    if ($role == "admin"):
        {

        mail.listMail();

        }
    
    // if ($role === "user")
    //     {


    
    //     }

    public function decode($jwt) 
    {   
        if (!empty($jwt)) {
            // Trim whitespace from token string.
            $jwt = trim($jwt);

            // Remove the 'Bearer ' prefix, if present, in the event we're getting an Authorization header that's using it.
            if (substr($jwt, 0, 7) === 'Bearer ') {
                $jwt = substr($jwt, 7);
            }

            // Attempt to decode the token:
            try {
                $token = JWT::decode($jwt, new Key("7kM2p9WjN5bV1xR8zT4qL6dY", 'HS256'));
                $this->userId = $token->userId;
                $this->role = $token->role;
            } catch (\Throwable $e) {
                // The token wasn't valid.
                console.log("HTTP 401");
            }
        }
    }
}