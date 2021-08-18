import psutil

from components.matrix.gpuPlugin import get_gpu_usage


class MatrixCollector:
    def __init__(self):
        self.ram = psutil.virtual_memory()[2]
        self.cpu = psutil.cpu_percent(4)
        self.gpu = get_gpu_usage()
        return

    def data(self):
        return self.__dict__
