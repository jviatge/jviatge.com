import { motion } from "framer-motion";
import pageBaseAnim from "../animations/pageBaseAnim";
import {Flipendo} from "../utils/Flipendo";
import {useEffect, useState} from "react";
import {Buffer} from "buffer";
import {SpotifyToken} from "../utils/SpotifyToken";

const PLaylist = () => {

	const [data, setData] = useState<any>();
	const [playlistData, setPlaylistData] = useState<any>();
	const [accessToken, setAccessToken] = useState<string|null>(null);

	/*https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists*/

	useEffect(() => {


		if(accessToken){
			const getDataApi = async () => {

				const UserId = import.meta.env.VITE_USER_ID
				const playlistsData = await Flipendo(`https://api.spotify.com/v1`, {headers: {
						Authorization: `Bearer ${accessToken}`
					}})
					.get(`/users/${UserId}/playlists`)
					.json()
				setData(playlistsData)

				/*data && console.log(data)*/
			}
			getDataApi()
		} else {
			const getAccessToken = async () => {
				const result = await SpotifyToken()
				setAccessToken(result)
			}
			getAccessToken()
		}
	},[accessToken]);

	const getPlaylistData = async(id:string) => {
		const data = await Flipendo(`https://api.spotify.com/v1`, {headers: {
				Authorization: `Bearer ${accessToken}`
			}})
			.get(`/playlists/${id}`)
			.json()

		setPlaylistData(data)
		/*playlistData && console.log(playlistData)*/
	}

	return (<motion.div {...pageBaseAnim} className={'text-center'}>

		<h1 className={'uppercase text-5xl'}>Playlist</h1>

		{playlistData &&
			<div className={"my-4 border-2 border-black"}>
				{playlistData.name}
                <ul className={''}>
					{playlistData.tracks?.items.map(({track}:any) =>
						<li
							key={track.id}
							className={'w-96 flex items-center justify-between my-4 border-2 border-black p-4'}
						>
							<img alt={track.name} src={track.album.images[0]?.url} className={'h-20'}/>
							<span className={'uppercase'}>
								{/*{track.id}*/}
								{track.name}
							</span>
						</li>
					)}
                </ul>
			</div>
		}

		<ul className={'flex justify-center flex-col items-center my-8'}>
			{data?.items.map((playlist:any) =>
				<li
					key={playlist.id}
					className={'w-96 bg-yellow-50 flex items-center justify-between my-4 border-2 border-black p-4 cursor-pointer'}
					onClick={() => getPlaylistData(playlist.id)}
				>
					<img src={playlist.images[0]?.url} className={'h-20'}/>
					<span className={'uppercase'}>
						{/*{playlist.id}*/}
						{playlist.name}
					</span>
				</li>
			)}
		</ul>

		</motion.div>)
}

export default  PLaylist