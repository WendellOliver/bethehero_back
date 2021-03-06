import { getRepository, Repository } from "typeorm";
import ICreateIncidentDTO from "../dtos/ICreateIncidentsDTO";
import Incidents from "../models/Incidents";
import IIncidentsRepository from "./interface/IIncidentsRepository";

class IncidentsRepository implements IIncidentsRepository {

    private ormRepository: Repository<Incidents>


    constructor() {
        this.ormRepository = getRepository(Incidents);
    }

    async createIncidents(dataIncidents: ICreateIncidentDTO): Promise<Incidents> {

        const incidents = this.ormRepository.create(dataIncidents);

        const incident = await this.ormRepository.save(incidents);

        return incident;
    }

    async findByOngId(ong_id: string): Promise<Incidents[]> {

        const incidents = await this.ormRepository.find({
            where: {
                ong_id
            }
        })

        return incidents
    }

    async deleteIncidentsById(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }

}

export default IncidentsRepository;