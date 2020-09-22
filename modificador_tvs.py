def main():
    f = open(r'2016 Global Ecological Footprint - 2016 Global Ecological Footprint.txt')
    g = open('nuevo.txt','w')
    contenido_archivo = f.read()
    nuevo = ""
    for letra in contenido_archivo:
        if letra == '\t':
            nuevo += ','
        else:
            nuevo += letra
    g.write(nuevo)
main()