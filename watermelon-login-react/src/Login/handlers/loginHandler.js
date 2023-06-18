/*
 * Constant for the basic url of watermelon api.
 */
const baseUrl = "https://api2-stage.watermelon.co/iam/v1";

/*
 * Handler for the validation of the registration.
 *
 * @param registrationToken - The registration token from the response of the registration api.
 * @param navigate - A navigate hook to used for navigation to the next page.
 */
const validate = async (registrationToken, navigate) => {
    const requestBody = {
        registration_token: registrationToken
    };

    try {
        const response = await fetch(`${baseUrl}/registration/validate`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const result = await response.json;
        if (JSON.stringify(result).accessToken) {
            // Navigate to additional-registration-form
              navigate('/additional-registration');
        }
    } catch (e) {
        console.log('error');
    }
}

/*
 * Handler for the basic registration in watermelon platform.
 *
 * @param requestBody - The request body of the form to be send.
 * @param navigate - A navigate hook to used for navigation to the next page.
 */
export const loginHandler = async (requestBody, navigate) => {
    try {
        const response = await fetch(`${baseUrl}/registration`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const result = await response.json;

        validate(JSON.stringify(result).registration_token, navigate);
    } catch (e) {
        console.log('error');
    }
}

/*
 * Handler for the additional registration.
 *
 * @param requestBody - The request body of the form to be send.
 */
export const additionalLoginHandler = async (requestBody) => {
    try {
        const response = await fetch(`${baseUrl}/additional-registration`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const result = await response.json;
        console.log(JSON.stringify(result));
    } catch (e) {
        console.log('error');
    }
}
