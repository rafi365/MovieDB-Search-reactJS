import React from 'react';

function Dataformater(props){
    if(props.value === ""){
        return("Unavailable")
    }else{
        return(props.value);
    }
}
function PrintDetails(props){
    const jdata = props.jdata;
    const isdata = Boolean(jdata);
    // console.log(jdata);
    if(isdata && jdata.length !== 0){
        //TODO map needs key value(for react specs purposes)
        
        return(
            <fieldset>
                <legend><b>Movie Details</b></legend>
                <table>
                <tbody>
                    <tr>
                        <td><b>ID:</b></td>
                        <td><Dataformater value={jdata.id}/></td>
                    </tr>
                    <tr>
                        <td><b>Title:</b></td>
                        <td><Dataformater value={jdata.title}/></td>
                    </tr>
                    <tr>
                        <td><b>Year:</b></td>
                        <td><Dataformater value={jdata.year}/></td>
                    </tr>
                    <tr>
                        <td><b>Rating:</b></td>
                        <td><Dataformater value={jdata.rating}/></td>
                    </tr>
                    <tr>
                        <td><b>Film Length:</b></td>
                        <td><Dataformater value={jdata.length}/></td>
                    </tr>
                    <tr>
                        <td><b>Plot:</b></td>
                        <td><Dataformater value={jdata.plot}/></td>
                    </tr>
                </tbody>
                </table>
            </fieldset>
        );
    }else{
        return(
            <fieldset>
                <legend><b>Movie Details</b></legend>
                <table>
                <tbody>
                    <tr>
                        <td><b>ID:</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>Title:</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>Year:</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>Rating:</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>Film Length:</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><b>plot:</b></td>
                        <td></td>
                    </tr>
                </tbody>
                </table>
            </fieldset>
        );
    }
}

class MovieDetails extends React.Component {
    //   constructor(props) {
    //     super(props);
    //   }
    
      render() {
        return (
            <PrintDetails jdata={this.props.result}/>
        );
      }
    }
    
    export default MovieDetails;