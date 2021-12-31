import React,{ Component, useRef, useEffect} from 'react';

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
    //auto scroller
    const useMountEffect = fun => useEffect(fun, []);
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll
    useMountEffect(executeScroll); // Scroll on mount
    //end of auto scroller
    if(isdata && jdata.length !== 0){
        return(
            <fieldset ref={myRef}>
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
                        <td><b>Plot:</b></td>
                        <td></td>
                    </tr>
                </tbody>
                </table>
            </fieldset>
        );
    }
}

class MovieDetails extends React.Component {
      render() {
          if(this.props.loading === true){
              return(
                <fieldset>
                <legend><b>Movie Details</b></legend>
                <b>Loading...</b>
            </fieldset>
              );
          }else{
              return (
                  <PrintDetails jdata={this.props.result}/>
              );
          }
      }
    }
    
    export default MovieDetails;