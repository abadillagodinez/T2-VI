def main():
    f = open(r'nuevo.csv')
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