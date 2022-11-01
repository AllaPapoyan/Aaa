import React from 'react'
import ImagesBlog from "../image-blog/ImagesBlog"
import './sections.scss'
import imgblog1 from '../../../../src/assets/images/portfolio-1.jpg'
import imgblog2 from '../../../../src/assets/images/portfolio-2.jpg'
import imgblog3 from '../../../../src/assets/images/portfolio-3.jpg'

export const Sections = () => {
    return (
        <div className='sections-container G-container'>
            <div className='left'>
                <ImagesBlog img_s={imgblog1} title="12 ESSENTIAL FREE SKETCH PLUGINS"
                    desc="Sketch Measure helps designers organize and outline their work
             for developers, project managers, and other team members"/>

                <ImagesBlog img_s={imgblog2} title="CUSTOMIZE WORDPRESS THEMES EASILY"
                    desc="This guide is intended for those with some knowledge of HTML and CSS, but aren’t
             too familiar with the way WordPress themes work. If you don’t know much about web design but you are
             interested, that’s good too. We’ll explain everything each step of the way."/>

<ImagesBlog img_s={imgblog3} title="CREATIVE WEBSITE TEMPLATE PSD"
                    desc="This guide is intended for those with some knowledge of HTML and CSS, but aren’t
             too familiar with the way WordPress themes work. If you don’t know much about web design but you are
             interested, that’s good too. We’ll explain everything each step of the way."/>
            </div>
            <div className='right'></div>
        </div>
    )
}