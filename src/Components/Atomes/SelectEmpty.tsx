
const SelectEmpty = () => {

    return (
    <select disabled
    style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ced4da', borderRadius: '5px', backgroundColor: 'white', color: '#495057', appearance: 'none', marginTop: '20px' }}
    >
    <option value="disabled"><p>Pas de saveur disponible pour ce produit</p></option>
    </select>
    )
};
export default SelectEmpty;
