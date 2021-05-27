import os, sys, ctypes

if sys.version[0:3] != "3.9":
  sys.exit("[+] anda harus menggunakan versi python 3.9, versi python anda sekarang : "+sys.version[0:3])

brute = None

try:
  brute = __import__("Blueforce_Abm")
except Exception as E:
  if ctypes.sizeof(ctypes.c_voidp) != 8:
    [os.system(x) for x in ["pip install cython", "rm -rf *.so", "cythonize -i run.c"]]
    sys.exit("[*] silahkan jalankan ulang script ini.")

if str(brute).startswith("<module ") == False:
  sys.exit("[*] kesalahan pastikan kamu menginstall versi lengkap, https://github.com/Tech-abm/Blueforce_Abm")

if __name__ == "__main__":
  try:
    brute.main()
  except Exception as E:
    exit(str(E))
