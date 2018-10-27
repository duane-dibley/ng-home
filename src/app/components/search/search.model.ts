import { DataService } from '../../../common/data.service';
import { Gateway } from '../../../common/gateway.service';

export class Model {
    constructor(
        $scope,
        private dataService: DataService,
        private gateway: Gateway,
    ) {
        console.log();
    }
}
