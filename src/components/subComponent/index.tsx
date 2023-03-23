import { MouseEventHandler } from "react";

export interface SubComponentProps {
    clickHandler: MouseEventHandler<HTMLButtonElement>;
}

const SubComponent = (props: SubComponentProps) => {
    const { clickHandler } = props; 

    return <div>
        <h4>It's child component here</h4>
        <p>
            <button onClick={clickHandler}>click here to show popup</button>
        </p>
    </div>;

};

export default SubComponent;