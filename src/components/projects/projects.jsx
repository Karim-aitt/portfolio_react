import "./projects.css";
import { Spends } from "./all_projects/project_spends/p_spend";
import { Crypto } from "./all_projects/project_crypto_c/p_crypto";
import { Crm } from "./all_projects/project_crm/p_crm";

export const Projects = () => {
	return (
		<div className="container flex flex-col gap-10">
            <div id="p_spends"><Spends /></div>
			<div id="p_crypto"><Crypto /></div>
			<div id="p_crm"><Crm /></div>
		</div>
        
	);
};
