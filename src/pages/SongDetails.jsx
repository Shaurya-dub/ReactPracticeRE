import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';
const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);
  console.log('songid', songid, songData);
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Details:</h2>
        <div className="mt-5">
          {/* {songData?.sections[0].metadata ? (
            songData?.sections[0].metadata.map((det) => (
              <p className="text-gray-400 text-base my-1">
                {det.title} : {det.text}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Details unavailable...
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
