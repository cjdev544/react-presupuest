
export const checkPresupuest = ( presupuest, remaining ) => {
    let myClass

    if( ( presupuest / 4 ) > remaining ) {
        myClass = 'alert alert-danger'
    }
    else if ( ( presupuest / 2 ) > remaining ) {
        myClass = 'alert alert-warning'
    }
    else {
        myClass = 'alert alert-success'
    }

    return myClass
}