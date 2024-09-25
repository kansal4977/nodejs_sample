//functional  componenet Same file=same function
//import it in another file using import Test1 from './Test1';
//it must be exported using - export default Test1; at the end of the file
//if there are more than one line in return () block, it must be embeded in closing tags  like <div> or emput <>
function Test1() {

    return (
        <div>
            <h1>Hello From functional component Test1</h1>
        </div>
    );

}

export default Test1;