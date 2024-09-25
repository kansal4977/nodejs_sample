//more than one functional component in a single file
// function should be defined using export keyword
//to import such components, we use import {Test21} from './Test2'; import {Test22} from './Test2';
export function Test21() {

    return (
        <div>
            <h1>Hello From multi-functional componenet Test21</h1>
        </div>
    );

}

export function Test22() {

    return (
        <div>
            <h1>Hello From multi-functional componenet Test22</h1>
        </div>
    );

}

//export Test1;