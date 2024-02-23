import Button from "../Button/Button";

interface ToolbarProps {
    visibleToggle: Function;
    showResults: Function;
}

const Toolbar = ({ visibleToggle, showResults }: ToolbarProps) => {
    return (
        <>
            <main className="w-[90%] bg-beige-default h-[70px] rounded-xl">
                <div className="w-full h-full flex items-center px-4 gap-2">
                    <Button
                        onClick={() => visibleToggle(true)}
                        icon="Plus"
                        text={"Legg til skattemodul"}
                    />
                    <Button
                        onClick={() => showResults()}
                        icon="Arrow"
                        text={"Regn ut resultat"}
                    />
                </div>
            </main>
        </>
    );
};

export default Toolbar;
