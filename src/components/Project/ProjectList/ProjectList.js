import React, { Component } from 'react';
import './ProjectList.scss';
import Search from './Search/ProjectSearch';
import List from '../../List/List';
import Loading from '../../../common/Skeleton/Skeleton';

class ProjectList extends Component {
    constructor(props) {
        console.log('hello');
        super(props);
        this.state = {
            items: [
                {name: 'Project A', description: 'This is a description', createdDate: '2019/10/15 15:00'},
                {name: 'Project B', description: 'Description B', createdDate: '2019/10/15 18:00'},
            ]
        }
    }



  render() {
      return (
        //   <Loading />
        <div className="container">
            <div id="heading-wrapper" className="heading-wrapper">
                <h1>Project List</h1>
                <Search></Search>
            </div>
            <List items={this.state.items}></List>
        
        </div>

    )
  }

}

export default ProjectList;

// export default function ProjectList() {
//     return (
//         <div className="container">
//             <div id="heading-wrapper" className="heading-wrapper">
//                 <h1>Project List</h1>
//                 <Search></Search>
//             </div>
//             <List></List>
//         </div>
//     )
// }