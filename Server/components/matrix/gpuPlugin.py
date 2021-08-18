import GPUtil


def get_gpu_usage():
    gpus = GPUtil.getGPUs()
    gpu_count = len(gpus)
    if gpu_count <= 0:
        return 0.0
    else:
        try:
            gpu_usage = sum(gpu.load for gpu in gpus) / gpu_count
            return gpu_usage
        except Exception as err:
            print(err)
    return 0.0
