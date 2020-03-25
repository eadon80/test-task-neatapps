import React from 'react'
import { ReactSVG } from 'react-svg';
import qIcon from './img/help-12.svg';

export default function Content({resources, actions}) {
    return (
        <div className="Content__wrapper">
            <div className="Content">
                <div className="Content__header">{resources.activeResource.name}</div>
                <div className="Content__body">
                    <div className="Content__details">
                        <div className="Content__title">GENERAL DETAILS <ReactSVG src={qIcon} /></div>

                        <div className="Content__item">
                            <div className="Content__label">NAME</div>
                            <div className="Content__field">{resources.activeResource.name}</div>
                        </div>

                        <div className="Content__item">
                            <div className="Content__label">DESCRIPTION</div>
                            <div className="Content__field">{resources.activeResource.description}</div>
                        </div>

                        <div className="Content__item">
                            <div className="Content__label">RESOURCE TYPE</div>
                            <div className="Content__field">{resources.activeResource.resourceType}</div>
                        </div>

                        <div className="Content__item">
                            <div className="Content__label">PATH</div>
                            <div className="Content__field">{resources.activeResource.path}</div>
                        </div>
                    </div>
                    <div className="Content__actions">
                        <div className="Content__title">PERMITTED ACTIONS <ReactSVG src={qIcon} /></div>
                        {resources.activeResource.actionIds 
                            && resources.activeResource.actionIds.map(id => 
                                <div className="Content__action" key={id}>
                                    {actions[id].name}
                                </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
