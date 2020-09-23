from PIL import Image, ImageDraw

def drawLines(cantidad):
    im = Image.new('HSV', (600, 400), (0,0,255)) #construir la imagen en HueSaturationValue (HSV)
    
    #crea las posiciones en las que colocará las lineas
    posicionLinea = []
    i = 1
    while(i < cantidad+1):
        posicionLinea += [(360/cantidad)*i]
        i += 1

    #crea las saturaciones equidistantes
    saturations = []
    i = 1
    while(i < cantidad+1):
        saturations += [((220/cantidad)*i) + 35]
        i += 1

    saturations = saturations[::-1] #gira la lista de saturaciones de más fuerte a más debil

    draw = ImageDraw.Draw(im) #toma el draw de la imagen para dibujar
    hue = 0         #toma el hue, en este caso rojo
    value = 255     #toma el valor total

    i=1
    while(i < cantidad+1):
        x1 = 0
        x2 = 600
        y1 = posicionLinea[i-1]
        y2 = y1
        sat = int(saturations[i-1])
        draw.line([x1,y1,x2,y2], (hue,sat,value))
        i += 1
    im.show()

drawLines(10)
