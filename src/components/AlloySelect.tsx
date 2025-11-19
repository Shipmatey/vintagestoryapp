import { useState } from "react"

export default function AlloySelect() {
    const [selectedAlloy, setSelectedAlloy] = useState('brass');
    return (
        <label>
        Alloy:
        <select
          value={selectedAlloy}
          onChange={e => setSelectedAlloy(e.target.value)}
        >
          <option value="brass">Brass</option>
          <option value="bismuthbronze">Bismuth Bronze</option>
          <option value="tinbronze">Tin Bronze</option>
          <option value="blackbronze">Black Bronze</option>
          <option value="molybdochalkos">Molybdochalkos</option>
          <option value="leadsolder">Lead Solder</option>
          <option value="silversolder">Silver Solder</option>
          <option value="cupronickel">Cupronickel</option>
          <option value="electrum">Electrum</option>
        </select>
        </label>
    )
}