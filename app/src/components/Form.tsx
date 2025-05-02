import { useState } from "react";
import { categories } from "../data/Categories";
import { Category } from '../types/index';



const Form = () => {

    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    });



    return (
        <form className="space-y-5 bg-white p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input
                    type="text"
                    id="name"
                    className="border border-slate-300 rounded-lg"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas,Bicicleta"
                    value={activity.name}
                />
            </div>


            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    type="number"
                    id="calories"
                    className="border border-slate-300 rounded-lg"
                    placeholder="Calorias eje. 300 o 500"
                    value={activity.calories}
                />
            </div>
            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
                value="Guardar comida o Ejercicio"
            />
        </form>
    );
};

export default Form;