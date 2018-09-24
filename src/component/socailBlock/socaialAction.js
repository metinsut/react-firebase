export const socialLogin = selectedProvider => (
    async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            let user = await firebase.login({
                provider: selectedProvider,
                type: "popup"
            })
            console.log(user);
        } catch (error) {
            console.log(error)
        }
    }
)