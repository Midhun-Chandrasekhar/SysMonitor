import unittest
from components.matrix import MatrixCollector


class TestMatrixCollector(unittest.TestCase):
    def test_matrix_collector_none(self):
        obj = MatrixCollector()
        obj_data = obj.data()
        self.assertNotEqual(obj_data, None)

    def test_matrix_collector_gpu_not_none(self):
        obj = MatrixCollector()
        obj_data = obj.data()
        self.assertNotEqual(obj_data['gpu'], None)

    def test_matrix_collector_cpu_not_none(self=None):
        obj = MatrixCollector()
        obj_data = obj.data()
        self.assertNotEqual(obj_data['cpu'], None)

    def test_matrix_collector_ram_not_none(self=None):
        obj = MatrixCollector()
        obj_data = obj.data()
        self.assertNotEqual(obj_data['ram'], None)

    @staticmethod
    def is_valid_matrix(matrix):
        if (isinstance(matrix, int) or isinstance(matrix, float)) and matrix >= 0:
            return True
        return False

    def test_matrix_collector_gpu_valid(self=None):
        obj = MatrixCollector()
        obj_data = obj.data()
        self.assertEqual(self.is_valid_matrix(obj_data['gpu']), True)

    def test_matrix_collector_cpu_not_none(self=None):
        obj = MatrixCollector()
        obj_data = obj.data()
        self.assertEqual(self.is_valid_matrix(obj_data['cpu']), True)

    def test_matrix_collector_ram_not_none(self=None):
        obj = MatrixCollector()
        obj_data = obj.data()
        self.assertEqual(self.is_valid_matrix(obj_data['ram']), True)

