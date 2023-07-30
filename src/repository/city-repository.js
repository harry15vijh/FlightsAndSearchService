const { City } = require('../models/index');

class CityRepository {

    async createCity({ name }) { 
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}