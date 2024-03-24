<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Barang;

class BarangControllerTest extends TestCase
{
    use RefreshDatabase; // Gunakan trait RefreshDatabase agar setiap pengujian membuat database baru

    /**
     * Test untuk mengambil semua data barang.
     *
     * @return void
     */
    public function test_get_all_barang()
    {
        $response = $this->get('/api/barang');
        $response->assertStatus(200);
    }

    /**
     * Test untuk mengambil satu data barang berdasarkan ID.
     *
     * @return void
     */
    public function test_get_barang_by_id()
    {
        $barang = Barang::factory()->create([
            'nama' => 'Test Barang',
        ]);
        $response = $this->get("/api/barang/{$barang->id}");
        $response->assertStatus(200);
    }

    /**
     * Test untuk mengembalikan status 404 jika barang tidak ditemukan.
     *
     * @return void
     */
    public function test_get_non_existing_barang_by_id()
    {
        $response = $this->get('/api/barang/999');
        $response->assertStatus(404);
    }

    /**
     * Test untuk membuat data barang baru.
     *
     * @return void
     */
    public function test_create_barang()
    {
        $data = [
            'nama' => 'Test Barang',
            'deskripsi' => 'Deskripsi Test Barang',
            'stok' => 10,
            'harga' => 50000.00
        ];
        $response = $this->post('/api/barang', $data);
        $response->assertStatus(201);
    }

    /**
     * Test untuk mengupdate data barang.
     *
     * @return void
     */
    public function test_update_barang()
    {
        $barang = Barang::factory()->create();
        $data = [
            'nama' => 'Updated Barang',
            'deskripsi' => 'Updated Deskripsi Barang',
            'stok' => 5,
            'harga' => 10000.00
        ];
        $response = $this->json('PUT', "/api/barang/{$barang->id}", $data);
        $response->assertStatus(200);
    }

    /**
     * Test untuk menghapus data barang.
     *
     * @return void
     */
    // public function test_delete_barang()
    // {
    //     $barang = Barang::factory()->create();
    //     $response = $this->json('DELETE', "/api/barang/{$barang->id}");
    //     $response->assertStatus(204);
    // }
}