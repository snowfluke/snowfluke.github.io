#!/bin/bash 
echo '
   ▄▄▄▄▄     ▄      ▄    ▄  █ ████▄ █▄▄▄▄    ▄▄▄▄▀        ▄▄▄▄▄   ▄█▄    █▄▄▄▄ ▄█ █ ▄▄     ▄▄▄▄▀ 
  █     ▀▄    █      █  █   █ █   █ █  ▄▀ ▀▀▀ █          █     ▀▄ █▀ ▀▄  █  ▄▀ ██ █   █ ▀▀▀ █    
▄  ▀▀▀▀▄   █   █ ██   █ ██▀▀█ █   █ █▀▀▌      █        ▄  ▀▀▀▀▄   █   ▀  █▀▀▌  ██ █▀▀▀      █    
 ▀▄▄▄▄▀    █   █ █ █  █ █   █ ▀████ █  █     █          ▀▄▄▄▄▀    █▄  ▄▀ █  █  ▐█ █        █     
           █▄ ▄█ █  █ █    █          █     ▀                     ▀███▀    █    ▐  █      ▀      
            ▀▀▀  █   ██   ▀          ▀                                    ▀         ▀            
'
# before running install software with command sudo apt install webp parallel -y
# uncomment strings below as needed


# convert jpegs
echo 'Renaming files to match mask..'
sleep 3
find . -name "*.PNG"  -exec sh -c 'mv "$1" "${1%.PNG}.png"' _ {} \;
echo 'Encoding files...'
sleep 3
find . -name "*.png" | parallel --bar --eta cwebp -q 90 -m 6 -segments 4 -sharp_yuv -v -metadata all {} -o {.}.webp
echo 'Removing source files in 30 seconds, be carefull..'
sleep 30
find . -name "*.png" | parallel --bar --eta rm {} \;


echo '
███████╗██╗███╗   ██╗██╗███████╗██╗  ██╗███████╗██████╗ 
██╔════╝██║████╗  ██║██║██╔════╝██║  ██║██╔════╝██╔══██╗
█████╗  ██║██╔██╗ ██║██║███████╗███████║█████╗  ██║  ██║
██╔══╝  ██║██║╚██╗██║██║╚════██║██╔══██║██╔══╝  ██║  ██║
██║     ██║██║ ╚████║██║███████║██║  ██║███████╗██████╔╝
╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═════╝
'
