import React from 'react';
import './body.css';
import Header from './header';
import { useDataLayerValue } from './datalayer'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    console.log(discover_weekly)
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className='body__info'>
                <img src={discover_weekly?.images[0].url} alt='' />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>

                    <p><strong>{discover_weekly?.owner.display_name}</strong> - {discover_weekly?.tracks.total} Songs</p>
                </div>

            </div>
            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        // onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map((item,id)=>
                <SongRow key={id} track={item.track}/>)}
            </div>

        </div>
    );

}

export default Body;
