import psutil


class MatrixCollector:
    def __init__(self):
        self.ram = psutil.virtual_memory()[2]
        self.cpu = psutil.cpu_percent(4)
        return

    def data(self):
        return self.__dict__
