export function testAction(text){
    console.log(text);
    return {
        type:'ACTION',
        data:text
    };
}

