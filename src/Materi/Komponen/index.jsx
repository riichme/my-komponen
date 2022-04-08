import React from "react";
import ClassComponent from "./pembelajaran/ClassComponent";
import FunctionalComponent from "./pembelajaran/FunctionalComponent";




export default class Komponen extends React.Component {
    render() {
        return(
            <div>
                <ClassComponent nama = "Ristmi Daffa klass komponen props"/>
                <FunctionalComponent/>
               

            </div>
        )
    }
}