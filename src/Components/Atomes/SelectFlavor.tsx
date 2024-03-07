import { Flavor } from "../../Services/Data/Supplement";

interface SelectFlavorProps {
    flavors: Flavor[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectFlavor = ({ flavors, onChange }: SelectFlavorProps) => {

    return (
    <select
    onChange={onChange}
    style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ced4da', borderRadius: '5px', backgroundColor: 'white', color: '#495057', appearance: 'none', marginTop: '20px' }}
    >
    <option value=""><p>Sélectionner une saveur</p></option>
    {flavors.map((flavor) => (
        <option key={flavor.id} value={flavor.name}>
        {flavor.name}
        </option>
    ))}
    </select>
    )
};
export default SelectFlavor;
