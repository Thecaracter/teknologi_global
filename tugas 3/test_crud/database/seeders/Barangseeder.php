<?php

namespace Database\Seeders;

use App\Models\Barang;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class Barangseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Data dummy untuk barang
        $barangs = [
            ['nama' => 'Laptop', 'deskripsi' => 'Laptop ASUS', 'stok' => 10, 'harga' => 8000000.00],
            ['nama' => 'Smartphone', 'deskripsi' => 'Smartphone Samsung', 'stok' => 20, 'harga' => 5000000.00],
            ['nama' => 'Tablet', 'deskripsi' => 'Tablet Lenovo', 'stok' => 15, 'harga' => 3000000.00],
            ['nama' => 'Mouse', 'deskripsi' => 'Mouse Logitech', 'stok' => 30, 'harga' => 500000.00],
            ['nama' => 'Keyboard', 'deskripsi' => 'Keyboard Razer', 'stok' => 25, 'harga' => 1000000.00],
        ];

        // Masukkan data ke dalam tabel
        foreach ($barangs as $barang) {
            Barang::create($barang);
        }
    }
}
