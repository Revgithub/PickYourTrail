import { Destinations } from './destinations';
import { Itineraries } from './itineraries';
import { Vacations } from './vacations';

export interface Data
{
   destinations:Destinations[];
   vacations:Vacations[];
   itineraries:Itineraries[];
   
}