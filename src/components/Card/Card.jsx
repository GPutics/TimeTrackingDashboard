import React from 'react'

// Styling
import './Card.scoped.scss';

// Assets
import {ReactComponent as EllipsisIcon} from '../../assets/icon-ellipsis.svg';
import {ReactComponent as WorkIcon} from '../../assets/icon-work.svg';
import {ReactComponent as ExerciseIcon} from '../../assets/icon-exercise.svg';
import {ReactComponent as PlayIcon} from '../../assets/icon-play.svg';
import {ReactComponent as StudyIcon} from '../../assets/icon-study.svg';
import {ReactComponent as SelfCareIcon} from '../../assets/icon-self-care.svg';
import {ReactComponent as SocialIcon} from '../../assets/icon-social.svg';

const Card = ({item, filterTime}) => {
    return (
        <div className={`container ` + (item.title === 'Self Care' ? 'Self-Care' : item.title)} >
            {(() => {
                switch(item.title) {
                    case 'Work':
                        return <WorkIcon className="icon" />
                    case 'Play':
                        return <PlayIcon className="icon" />
                    case 'Study':
                        return <StudyIcon className="icon" />
                    case 'Social':
                        return <SocialIcon className="icon" />
                    case 'Self Care':
                        return <SelfCareIcon className="icon" />
                    case 'Exercise':
                        return <ExerciseIcon className="icon" />
                    default: return <h1>lofasz</h1>
                }
            })()}

            <div className="inner-container">
                <div className="title">
                    {item.title}
                    <EllipsisIcon className="ellipsis"/>
                </div>
                <div className="time">
                    <div className="current">
                        {filterTime === "daily" && <div>{item.timeframes.daily.current} hrs</div>}
                        {filterTime === "weekly" && <div>{item.timeframes.weekly.current} hrs</div>}
                        {filterTime === "monthly" && <div>{item.timeframes.monthly.current} hrs</div>}
                    </div>
                    <div className="previous">
                        {filterTime === "daily" && <div>Yesterday - {item.timeframes.daily.previous}hrs</div>}
                        {filterTime === "weekly" && <div>Last week - {item.timeframes.weekly.previous}hrs</div>}
                        {filterTime === "monthly" && <div>Last week - {item.timeframes.weekly.previous}hrs</div>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
