import React from 'react';

function PrintTitles(props){
    const jdata = props.jdata;
    const companies = jdata.companies;
    const names = jdata.names;
    const titles = jdata.titles;
    const isdata = Boolean(titles);
    if(isdata && titles.length !== 0){
        //TODO map needs key value(for react specs purposes)
        const listItems = titles.map((title) =>
        <li>{title.title}</li>
        );
        return(
            <div>
                <h1>Search Result</h1>
                <ul>{listItems}</ul>
            </div>
        );
    }else{
        return(
            <div>
                <h1>Search Result</h1>
                <p>No Results Found!</p>
            </div>
        );
    }
}

class MovieResult extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    return (
    //  <div>{JSON.stringify(this.props.result, null, 2)}</div>
    <PrintTitles jdata={this.props.result}/>
    );
  }
}

export default MovieResult;
