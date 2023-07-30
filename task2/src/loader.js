import {Bars} from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <Bars
            type="TailSpin"
            color="#ED8E7C"
            style={{ marginLeft: '270px' }}
            height={50}
            width={50}
            timeout={3000}
            // wrapperStyle={{}}
            // wrapperClass=""
            />
       </div>
    );
}
export default LoaderComp
