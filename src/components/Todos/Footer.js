
import React  from 'react'
import Btn from './Btn'

import { VisibilityFilters } from '../../actions/todo';

const Footer = () => 
        <div className="btns">
            <span>Show:</span>
            <Btn text={'All'} filter={VisibilityFilters.SHOW_ALL}/>
            <Btn text={'Active'} filter={VisibilityFilters.SHOW_ACTIVE}/>
            <Btn text={'Completed'} filter={VisibilityFilters.SHOW_COMPLETED}/>
        </div>
 
export default Footer;