
import React  from 'react'
import Btn from './components/Btn'
import { SHOW_ALL, SHOW_ACTIVE,SHOW_COMPLETED } from '../../actions/ActiveTypes'

const Footer = () => 
        <div className="btns">
            <span>Show:</span>
            <Btn text={'All SHOW_ALL'} filter={SHOW_ALL}/>
            <Btn text={'Active SHOW_ACTIVE'} filter={SHOW_ACTIVE}/>
            <Btn text={'Completed SHOW_COMPLETED'} filter={SHOW_COMPLETED}/>
        </div>
 
export default Footer;