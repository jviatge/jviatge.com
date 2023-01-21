import {Buffer} from "buffer";

export const SpotifyToken = async ():Promise<string> => {

	const ClientID = import.meta.env.VITE_CLIENT_ID
	const ClientSecret = import.meta.env.VITE_CLIENT_SECRET

	const { access_token: accessToken } = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Authorization': 'Basic ' + (new Buffer(ClientID + ':' + ClientSecret).toString('base64')),
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: new URLSearchParams({
			grant_type: 'client_credentials',
			client_id:ClientID,
			client_secret:ClientSecret
		}),
	}).then((r) => r.json());

	return accessToken
}