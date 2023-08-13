import { world,  ItemStack, Entity, ItemEnchantsComponent, ItemTypes, EntityInventoryComponent, Block, Enchantment } from "@minecraft/server"
import { system, Vector } from "@minecraft/server";

import { toolTip } from "./main";


system.runInterval(
    () => {
        //replaceItemOnBroken();
        
        //backPack();
        
        for (const player of world.getAllPlayers()) {
            toolTip(player);
        }
    },
);
